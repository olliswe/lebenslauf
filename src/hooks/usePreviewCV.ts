import { useImperativeQuery } from "../queries/useQuery";
import { useCallback } from "react";
import usePreviewCVStore from "stores/usePreviewCVStore";
import useToastMessages from "hooks/useToastMessages";

const usePreviewCV = () => {
  const { data, refetch, isLoading } = useImperativeQuery<string, any>(
    "preview-cv",
    "/show-template",
    { responseType: "text" }
  );

  const setPreviewCV = usePreviewCVStore((state) => state.setPreviewCV);
  const { error: errorToast } = useToastMessages();

  const getPreviewCV = useCallback(async () => {
    const { data, error } = await refetch();
    if (!data || error) {
      errorToast("Unable to fetch your CV");
      return;
    }
    setPreviewCV(data);
  }, [errorToast, refetch, setPreviewCV]);

  return { getPreviewCV, data, isLoading };
};

export default usePreviewCV;
