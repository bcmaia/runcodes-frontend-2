# Using the Pages Directory Effectively

Welcome to the **Pages** directory in our Runcodes frontend app! This directory holds all the accessible pages that make our app stand out. Here's how to use it seamlessly and integrate new pages into the app's router.

## Integrating with the Router

When you create a new page in this directory, remember to add a corresponding route in the `<App>` component. This step ensures the router can navigate users to the new page.

## Naming and Organization

1. **Page Component Naming**: Use PascalCase for both the page's component name and its associated file. For example, if your page is called "Dashboard", name the component file "Dashboard.tsx".

2. **Stylesheet**: If your page needs styling, create a `.css` file with the same name as the page. This approach keeps styles organized and aligned with their pages.

3. **Page-Specific Components**: Sometimes, a page needs unique components that won't be reused elsewhere. Create a subdirectory within the page's folder. The subdirectory should have the same name as the page. Inside it, put all the special components. Here's how the directory tree should look:

    ```
    pages/
    |   ExamplePage/
    |   |   ExampleComponent.css
    |   |   ExampleComponent.tsx      
    |   ExamplePage.css
    |   ExamplePage.tsx
    ```

4. **Reusable Components**: If a component deserves to be reused across the app, put it in the `shared/` directory. This approach promotes code reusability and project maintainability.