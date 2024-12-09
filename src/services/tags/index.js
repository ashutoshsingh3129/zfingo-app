
import { apiTags } from '../apiTags';
export const getTagApi = apiTags.injectEndpoints({
    reducerPath: 'getTagApi',
    endpoints: builder => ({
        updateAccountTags: builder.mutation({
            query: tags => ({
                url: '/Auth/updateAccountTags',
                method: 'POST',
                body: tags,
            }),
            invalidatesTags: ['TAGS',],
        }),
        getAccountTags: builder.query({
            query: () => '/Auth/getAccountTags',
            providesTags: ['TAGS',],
        }),
    }),
    overrideExisting: true,
});
export const {
    useUpdateAccountTagsMutation,
    useGetAccountTagsQuery,
} = getTagApi;