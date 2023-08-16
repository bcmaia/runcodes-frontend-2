# Using the Pages Directory Effectively

Welcome to the **Pages** directory in our Runcodes frontend app! This directory 
holds all the accessible pages that make our app stand out. Here's how to use it
seamlessly and integrate new pages into the app's router.

## Integrating with the Router

When you create a new page in this directory, remember to add a corresponding
route in the `<App>` component. This step ensures the router can navigate users
to the new page.

## Naming and Organization

1. **Page Component Naming**: Use PascalCase for the page name and save the page
file ending in `.page.tsx`. For example, if your page is called
"MainDashboard", name the component file "MainDashboard.page.tsx".

2. **Stylesheet**: Do not create a `.css` file. Use pandacss to style your 
components and try to keep your styles withing the same file. 
If the need arises, create a `NameOfTheComponent.style.ts` file with the needed
styles or create recipes (`NameOfTheRecipe.recipe.ts`)

3. **Complex Pages**: Sometimes, the page code gets big or a page needs unique 
components that won't be reused elsewhere. In those cases, create a subdirectory 
within the page's folder. The subdirectory should have the same name as the page. 
Inside it, put all the special components, styles and subpages. 
Here's how the directory tree should look:

    ```
    pages/
    |   ExamplePage/
    |   |   DashboardConfig.page.tsx
    |   |   DashboardPanel.component.tsx
    |   |   ExamplePage.style.ts
    |   DashBoard.page.tsx
    ```

4. **Reusable Components**: If a component deserves to be reused across the app,
put it in the `src/components/` directory. 
This approach promotes code reusability and project maintainability.
