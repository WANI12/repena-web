<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="About Repena — a multi-sector company in South Sudan helping organizations grow with branding, software, AI, and strategy." />
        <title>{{ config('app.name', 'Repena') }} | About</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="bg-slate-50">
        <div id="repena-root"></div>
    </body>
</html>
