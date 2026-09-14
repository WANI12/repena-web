<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Contact Repena for branding, software, and growth support in South Sudan." />
        <title>{{ config('app.name', 'Repena') }} | Contact</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-slate-50">
        <div id="repena-root"></div>
    </body>
</html>
