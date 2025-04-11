import { useCallback } from "react";
import { useDeleteMyOutGoingQuery } from "queries/Pass/pass.query";
import { useDeleteMySleepingQuery } from "queries/Leave/leave.query";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "queries/queryKey";


export const useOutPass = (select: boolean ) => {
  const { mutate: deleteOuting } = useDeleteMyOutGoingQuery();
  const { mutate: deleteSleeping } = useDeleteMySleepingQuery();
  const queryClient = useQueryClient();

  const handleDelete = useCallback(
    (id: number) => {
      if (select) {
        deleteOuting(id, {
            onSuccess: () => {
                queryClient.invalidateQueries(QUERY_KEYS.leave.getLeave);
              },
        });
      } else {
        deleteSleeping(id, {
            onSuccess: () => {
                queryClient.invalidateQueries(QUERY_KEYS.pass.getPass);
            },
        });
      }
    },
    [select, deleteOuting, deleteSleeping, queryClient]
  );

  return { handleDelete };
};
