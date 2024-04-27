"use client";

import { Edit, Launch } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import DeletePost from "../delete/delete-post";
import { Post } from "@/types/post";

function createData({
  id,
  title,
  body,
}: {
  id: number;
  title: string;
  body: string;
  userId: number;
}) {
  const shortBody = body.slice(0, 50) + "...";
  return { title, body: shortBody, length: body.length, id };
}

export default function PostTable({
  initialData = [],
}: {
  initialData: Post[];
}) {
  const [data, setData] = useState(initialData.map((item) => createData(item)));

  const onDeleted = (id: number) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
            <TableCell align="right">Length</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ textTransform: "uppercase" }}
              >
                {row.title}
              </TableCell>
              <TableCell>{row.body}</TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">
                <IconButton href={`/blog/${row.id}`} target="_blank">
                  <Launch />
                </IconButton>
                <IconButton
                  href={`/dashboard/posts/edit/${row.id}`}
                  target="_blank"
                >
                  <Edit />
                </IconButton>
                <DeletePost id={row.id} onDeleted={onDeleted} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
