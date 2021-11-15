import * as React from "react";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ pageAmount, page, onChange }) {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", my: "20px" }}>
      <Pagination
        count={pageAmount}
        page={page}
        onChange={onChange}
        color="secondary"
      />
    </Stack>
  );
}

BasicPagination.propTypes = {
  pageAmount: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};
