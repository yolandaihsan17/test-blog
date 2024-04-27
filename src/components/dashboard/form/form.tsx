"use client";

import { Button, Stack, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function PostForm({
  defaultData,
}: {
  defaultData?: { title: string; body: string; id: string; userId: string };
}) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [data, setData] = useState({
    title: defaultData?.title || "",
    body: defaultData?.body || "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    try {
      if (defaultData) patchData();
      else postData();
    } catch (error) {
      console.log("ERROR", error);
    } finally {
      setIsSaving(false);
      if (defaultData) {
        router.push("/dashboard/posts");
      } else {
        setData({ title: "", body: "" });
      }
    }
  };

  const postData = async () => {
    await fetch("http://localhost:3000/api/posts/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const patchData = async () => {
    if (!defaultData) return;
    await fetch(`http://localhost:3000/api/posts/${defaultData.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <Stack gap={2} component={"form"} onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={data.title}
        onChange={({ target: { value } }) => setData({ ...data, title: value })}
      />
      <TextField
        multiline
        maxRows={10}
        minRows={5}
        label="Content"
        value={data.body}
        onChange={({ target: { value } }) => setData({ ...data, body: value })}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isSaving}
        sx={{ marginTop: 4 }}
      >
        {defaultData ? "Save" : "Submit"}
      </Button>
    </Stack>
  );
}
