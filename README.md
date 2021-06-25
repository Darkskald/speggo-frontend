# Speggo Frontend

This is the frontend for the [Speggo spectral data server](https://github.com/Darkskald/speggo) based on the
**Svelte + Tailwind** [app template](https://github.com/sarioglu/svelte-tailwindcss-template)

## Technologies

- Svelte
- Tailwind CSS
- Plotly

## Features

## Concept

As the **Speggo** server is mainly providing the API to interact with the experimental data residing in a database, but
a lot of UI user interaction is required to deal with the data effectively. To combine the ease of a kind of static Go
file server with interactive client-side rendering, Svelte was chosen. It does not need a runtime environment because it
is compiled to plain text (HTML/CSS/JS). Because of that, the compiled front end can be deployed with and served by the
Go server and provide a rich client experience.