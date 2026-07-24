2. The Technical Challenge: "Contact Directory App" You must build a mobile screen strictly in React Native that consumes a public API to list and filter a directory of 1,000 contacts.
● Endpoint URL (GET): [https://randomuser.me/api/?results=1000](https://randomuser.me/a pi/?results=1000)

● (Note: This endpoint returns a deeply nested JSON. You will need to extract the user's first name, last name, email, and thumbnail picture).

3. Strict Technical & UI Requirements: We evaluate your attention to
 detail. The UI must match these exact specifications:

● Global Layout:
○ App Background Color: #F3F4F6
○ Global Screen Padding: 16px ● Search Bar (Top):
○ Input Background: #FFFFFF
○ Border: 1px solid #D1D5DB, Border Radius: 8px
○ Functionality requirement: The search bar must filter the contact list by first or last name locally. It must filter in real-time exactly as the user types every single keystroke.

● Contact Card (List Items):
○ Card Background: #FFFFFF
○ Card Border Radius: 12px
○ Card Padding: 12px
○ Margin Bottom between cards: 8px
○ Layout: Horizontal row (Flex-direction: row).
○ Image: Use the picture.thumbnail URL. It must be strictly
           50px width by 50px height, with a 25px border radius
           (perfect circle).
○ Typography:
■ Full Name: Bold (fontWeight: 'bold'), Font Size: 16px,
Color: #1F2937.

■ Email: Regular, Font Size: 14px, Color: #6B7280.

● List Implementation Constraint: To display the 1,000 contacts, please map the array and wrap the list inside a standard <ScrollView> component to ensure vertical scrolling is enabled.

● State Management: The app must visually handle three states: Loading (show an ActivityIndicator), Error, and Success.

● Architecture & Data Handling: How you traverse and extract the nested JSON data.

● UI/UX Precision: How accurately you follow the design tokens (colors, padding, flexbox layout).

● Technical Communication: Your ability to articulate your decisions out loud, especially when encountering technical hurdles or evaluating the provided instructions.





///
Interface API
Interface Contacto 