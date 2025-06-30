import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["quiz"],
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => "/quizzes",
      providesTags: ["quiz"],
    }),
    addQuiz: builder.mutation({
      query: (quizData) => ({
        url: "/quizzes",
        method: "POST",
        body: quizData,
      }),
      invalidatesTags: ["quiz"],
    }),
  }),
});

export const { useGetAllQuizQuery } = quizApi;
