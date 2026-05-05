// app/api/backpain/route.ts
import { NextResponse } from 'next/server'

interface BackPainFormData {
  name: string
  phone: string
  age: string
  severity: string
  location: string
  healthProblem: string
  source?: string
  consent?: boolean
}

/**
 * Get Zoho CRM OAuth Token
 */
async function getZohoAccessToken() {
  const clientId = process.env.ZOHO_CLIENT_ID
  const clientSecret = process.env.ZOHO_CLIENT_SECRET
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN
  const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.com'

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Zoho CRM credentials are not configured')
  }

  try {
    const response = await fetch(`${accountsUrl}/oauth/v2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to get access token')
    }

    return data.access_token
  } catch (error) {
    console.error('Zoho token error:', error)
    throw new Error('Failed to authenticate with Zoho CRM')
  }
}

/**
 * Create Lead in Zoho CRM
 */
async function createZohoLead(formData: BackPainFormData, accessToken: string) {
  const apiUrl = process.env.ZOHO_CRM_API_URL || 'https://www.zohoapis.com'

  const leadData = {
    data: [
      {
        Company: 'Back Pain Patient',
        Last_Name: formData.name,
        First_Name: formData.name.split(' ')[0] || formData.name,
        Email: formData.email || '', // You might want to add email field to your form
        Phone: formData.phone,
        Lead_Source: formData.source || 'Back Pain Treatment Website',
        City: formData.location,
        State: formData.location,
        Description: `Health Problem: ${formData.healthProblem}\n\nAge: ${formData.age}\nSeverity: ${formData.severity}\nLocation: ${formData.location}\nSource: ${formData.source || 'Back Pain Treatment'}`,
        // Custom fields - you might need to create these in your Zoho CRM
        Age: formData.age,
        Severity: formData.severity,
        Health_Problem: formData.healthProblem,
        Consent: formData.consent ? 'Yes' : 'No',
        // Lead status
        Lead_Status: 'New',
      }
    ]
  }

  const response = await fetch(`${apiUrl}/crm/v2/Leads`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  })

  if (!response.ok) {
    const errorData = await response.text()
    throw new Error(`Zoho CRM API error: ${response.status} - ${errorData}`)
  }

  const result = await response.json()
  return result
}

/**
 * Alternative: Create Contact in Zoho CRM (if you prefer to use Contacts module)
 */
async function createZohoContact(formData: BackPainFormData, accessToken: string) {
  const apiUrl = process.env.ZOHO_CRM_API_URL || 'https://www.zohoapis.com'

  const contactData = {
    data: [
      {
        Last_Name: formData.name,
        First_Name: formData.name.split(' ')[0] || formData.name,
        Email: formData.email || '',
        Phone: formData.phone,
        Mailing_City: formData.location,
        Mailing_State: formData.location,
        Description: `Health Consultation Request\n\nAge: ${formData.age}\nSeverity: ${formData.severity}\nHealth Problem: ${formData.healthProblem}\nSource: ${formData.source || 'Back Pain Treatment'}`,
        Lead_Source: formData.source || 'Back Pain Treatment Website',
        // Custom fields
        Age: formData.age,
        Severity: formData.severity,
        Health_Condition: formData.healthProblem,
      }
    ]
  }

  const response = await fetch(`${apiUrl}/crm/v2/Contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Zoho-oauthtoken ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  })

  if (!response.ok) {
    const errorData = await response.text()
    throw new Error(`Zoho CRM API error: ${response.status} - ${errorData}`)
  }

  const result = await response.json()
  return result
}

/**
 * Handle POST request
 */
export async function POST(request: Request) {
  try {
    const data: BackPainFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.phone || !data.age || !data.severity || !data.location || !data.healthProblem) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get Zoho CRM access token
    const accessToken = await getZohoAccessToken()

    // Create lead in Zoho CRM
    const zohoResponse = await createZohoLead(data, accessToken)

    // Optional: Also create contact if needed
    // const contactResponse = await createZohoContact(data, accessToken)

    return NextResponse.json(
      {
        success: true,
        zohoResponse,
        message: 'Consultation request submitted successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Zoho CRM submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit consultation request',
        details: error instanceof Error ? error.message : 'Unknown error',
        referenceId: `ERR-${Date.now()}`,
      },
      { status: 500 }
    )
  }
}