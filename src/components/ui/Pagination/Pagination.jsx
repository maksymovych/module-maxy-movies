import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ pageAmount, page, changePage }) {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", my: "20px" }}>
      <Pagination
        count={pageAmount}
        page={page}
        onChange={changePage}
        color="secondary"
      />
    </Stack>
  );
}
