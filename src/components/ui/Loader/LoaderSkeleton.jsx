import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function LoaderSkeleton() {
  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      sx={{ p: "15px" }}
    >
      <Skeleton variant="rectangular" width={250} height={470} />
      <Skeleton
        variant="rectangular"
        sx={{ p: "15px" }}
        width={250}
        height={470}
      />
      <Skeleton
        variant="rectangular"
        sx={{ p: "15px" }}
        width={250}
        height={470}
      />
    </Stack>
  );
}
