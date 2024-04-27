"use client";

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function DeletePost({
  id,
  onDeleted,
}: {
  id: number;
  onDeleted: (id: number) => void;
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const deletePost = async () => {
    setIsDeleting(true);
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      onDeleted(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <IconButton onClick={deletePost} disabled={isDeleting}>
      <Delete />
    </IconButton>
  );
}
