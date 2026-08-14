// =========================================================================
// GOOGLE APPS SCRIPT FOR MODY HOSPITALITY CONTACT FORM LEADS
// =========================================================================
// TARGET GOOGLE SHEET ID: 1xY9cGSLSJ0UxPv9zgphLe9U2AlJgpWzKtS9Q7yp_9kc
//
// INSTRUCTIONS TO SETUP IN GOOGLE SHEETS:
// 1. Open your Google Sheet (ID: 1xY9cGSLSJ0UxPv9zgphLe9U2AlJgpWzKtS9Q7yp_9kc)
// 2. Click "Extensions" -> "Apps Script" in the top menu bar.
// 3. Delete any default code in Editor (Code.gs) and paste THIS ENTIRE FILE.
// 4. (Optional) Change NOTIFICATION_EMAIL below to your preferred email address.
// 5. Click the "Save" icon (or Ctrl+S).
// 6. Click "Deploy" (top right button) -> Select "New deployment".
// 7. Click the gear icon (Select type) -> Select "Web app".
// 8. Set the fields:
//    - Description: Mody Contact Form API
//    - Execute as: Me (your Google account)
//    - Who has access: Anyone  <-- (CRITICAL STEP! Must be set to Anyone)
// 9. Click "Deploy". Authorize permissions when prompted by Google.
// 10. Copy the generated "Web App URL" (starts with https://script.google.com/macros/s/...).
// 11. Paste your Web App URL into .env.local:
//     NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
// =========================================================================

const SPREADSHEET_ID = "1xY9cGSLSJ0UxPv9zgphLe9U2AlJgpWzKtS9Q7yp_9kc";
const NOTIFICATION_EMAIL = "ritikkvs2177@gmail.com"; // Email that receives instant lead notifications

function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter || {};
    }

    const timestamp = new Date();
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const property = data.property || "N/A";
    const interest = data.interest || "N/A";
    const message = data.message || "N/A";

    // 1. Open Target Google Sheet by ID & Get Active Sheet
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getActiveSheet();
    
    // Check if header row exists, if not create headers automatically
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Property / Company", "Area of Interest", "Message"]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#F3F4F6");
    }

    sheet.appendRow([timestamp, name, email, property, interest, message]);

    // 2. Send Instant Email Notification to Admin
    if (NOTIFICATION_EMAIL) {
      const subject = `🔥 New Hospitality Lead: ${name} - ${interest}`;
      const htmlBody = `
        <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; color: #1f2937; background-color: #ffffff;">
          <h2 style="color: #9e4b2d; margin-top: 0; font-size: 20px;">New Contact Form Enquiry</h2>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 20px;">A new lead has submitted an enquiry on Mody Hospitality Consultants website.</p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #6b7280; width: 140px;"><strong>Date & Time:</strong></td>
              <td style="padding: 6px 0; color: #111827;">${timestamp.toLocaleString()}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Name:</strong></td>
              <td style="padding: 6px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Email:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #9e4b2d; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Property / Company:</strong></td>
              <td style="padding: 6px 0; color: #111827;">${property}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #6b7280;"><strong>Area of Interest:</strong></td>
              <td style="padding: 6px 0; color: #111827;">${interest}</td>
            </tr>
          </table>
          
          <div style="background-color: #f9fafb; border-left: 4px solid #9e4b2d; padding: 14px 16px; margin-top: 20px; border-radius: 6px;">
            <p style="margin: 0; font-weight: bold; color: #374151; font-size: 13px;">Requirement / Message:</p>
            <p style="margin-top: 8px; margin-bottom: 0; white-space: pre-wrap; font-size: 14px; color: #1f2937;">${message}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0 16px 0;" />
          <p style="font-size: 12px; color: #9ca3af; text-align: center; margin: 0;">Mody Hospitality Consultants Lead Management System</p>
        </div>
      `;

      MailApp.sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: subject,
        htmlBody: htmlBody
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Lead added and email sent" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", spreadsheetId: SPREADSHEET_ID, service: "Mody Hospitality Contact API" }))
    .setMimeType(ContentService.MimeType.JSON);
}
