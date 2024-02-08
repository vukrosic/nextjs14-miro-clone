import { useMutation } from "convex/react";
import { useState } from "react";

export const useApiMutation = (mutationFunction: any) => {
    const [pending, setPending] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = (payload: any) => {
        setPending(true);
        console.log("true")
        return apiMutation(payload)
            .finally(() => setPending(false))
            .then((result) => {
                return result;
            })
            .catch((error: any) => {
                throw error;
            });

    }

    return {
        mutate,
        pending
    }
};