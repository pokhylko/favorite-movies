import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

import {API_CONFIG} from "../api/apiConfig";

const baseQuery = fetchBaseQuery({
    baseUrl: API_CONFIG.baseUrl,
    prepareHeaders: (headers) => {
        headers.set("Content-Type", "application/json");
        headers.set("trakt-api-version", "2");
        headers.set("trakt-api-key", API_CONFIG.apiKey);

        return headers;
    },
});

const baseQueryWithRetry = retry(baseQuery, {maxRetries: 6});

export const api = createApi({
    reducerPath: "splitApi",
    baseQuery: baseQueryWithRetry,
    tagTypes: ["Popular movies"],
    endpoints: () => ({}),
});
