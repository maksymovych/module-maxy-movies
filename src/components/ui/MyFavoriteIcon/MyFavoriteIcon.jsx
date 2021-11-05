import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function MyFavoriteIcon({ amount, ...props }) {
  return (
    <IconButton aria-label={notificationsLabel(amount)} {...props}>
      <Badge title="Go To Favorites" badgeContent={amount} color="secondary">
        <FavoriteIcon />
      </Badge>
    </IconButton>
  );
}
