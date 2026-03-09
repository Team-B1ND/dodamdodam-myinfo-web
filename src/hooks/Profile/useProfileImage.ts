import { ChangeEvent, useEffect, useState } from "react";
import FileUpload from "repositories/Profile/fileUpload";

export const DEFAULT_PREVIEW = "__DEFAULT_PREVIEW__";

const useProfileImage = (initialUrl?: string | null) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [objectUrl]);

  const setPreviewFromFile = (file: File | null) => {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      setObjectUrl(null);
    }
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setObjectUrl(url);
    setPreview(url);
  };

  const setPreviewFromUrl = (url: string | null) => {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      setObjectUrl(null);
    }
    setPreview(url);
  };

  const resetToDefault = () => {
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
      setObjectUrl(null);
    }
    setPreview(DEFAULT_PREVIEW);
  };

  const upload = async (file: File): Promise<string> => {
    setIsUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await FileUpload.postFileUpload(form);
      const uploadedUrl = (res as any)?.data ?? "";
      return uploadedUrl;
    } finally {
      setIsUploading(false);
    }
  };

  const [imageState, setImageState] = useState<{
    file: File | null;
    shouldReset: boolean;
  }>({
    file: null,
    shouldReset: false,
  });

  useEffect(() => {
    setPreviewFromUrl(initialUrl ?? null);
    setImageState({ file: null, shouldReset: false });
  }, [initialUrl]);

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setImageState({ file, shouldReset: false });
      setPreviewFromFile(file);
    }
  };

  const onResetToDefault = () => {
    setImageState({ file: null, shouldReset: true });
    resetToDefault();
  };

  const uploadIfNeeded = async (): Promise<{
    url: string | null;
    error?: boolean;
  }> => {
    const current = initialUrl ?? null;
    if (imageState.file) {
      try {
        const url = await upload(imageState.file);
        setPreviewFromUrl(url);
        return { url };
      } catch (e) {
        return { url: null, error: true };
      }
    }
    if (imageState.shouldReset) return { url: null };
    return { url: current };
  };

  return {
    preview,
    setPreviewFromFile,
    setPreviewFromUrl,
    resetToDefault,
    isUploading,
    onChangeImage,
    onResetToDefault,
    uploadIfNeeded,
    DEFAULT_PREVIEW,
  };
};

export default useProfileImage;
