# Mental Health Service Finder

This project is a mental health service finder that uses the Google Places API to search for mental health services near a user's location. The user can enter a location and a search term to find mental health services near them. The user can also click on a service to view more details about the service.

![Demo Gif](demo.gif)

## Cloud Architecture Diagram

```mermaid
graph LR
    subgraph "User"
        Browser[Web Browser]
    end

    subgraph "Cloud CDN Hosting"
        App[Next.js App]
    end

    subgraph "External Services"
        Google[Google Maps & Places APIs]
        NYC[NYC Mental Health Services API]
    end

    Browser <--> App
    App <--> Google
    App <--> NYC

    style Browser fill:#f6f6f6
    style App fill:#4c51bf,color:#fff
    style Google fill:#34a853,color:#fff
    style NYC fill:#ff6b6b,color:#fff
```

## Getting Started

First, set your Google API key:

1. Create a `.env.local` file in the root of your project.
2. Add your Google API key to the file:
   ```
   NEXT_PUBLIC_GOOGLE_API_KEY=your_google_api_key_here
   ```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```bash
app
├── components
│   ├── cards
│   │   └── service-result.tsx    # Component for displaying service results
│   ├── index.ts                  # Export all components
│   └── [shared-components].tsx   # Shared layout and functional component
├── layout.tsx                    # Main layout component
└── page.tsx                      # Main page component
```

## Future Improvements

Here are some potential future improvements to scale this application:

1. **Data Pipeline**: Having a data pipeline to ingest, clean, validate, and enrich the mental health service data. This ensures the data is accurate, up-to-date, and relevant for users. For example, phone numbers, addresses, and hours of operation can be validated and enriched with additional information using Google Places API.

2. **Proxying Requests and Caching**:

- **Implement a proxy server** to handle requests to external APIs. This can help manage rate limits, improve security, and provide a single point of access for external data.
- **Caching mechanisms** to store frequently accessed data to reduce load on external APIs and improve the application's response times.

3. **Monitoring and Logging**: Implement comprehensive monitoring and logging to track the application's performance, detect issues early, and ensure smooth operation. Use tools like Prometheus, Grafana, and ELK stack to monitor metrics, logs, and traces. Creation of runbooks and alerts for critical issues.
