import { useCallback } from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import {
  Box,
  Divider,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useAuth } from "@/hooks/auth-context";
import { CheckCircle } from "@mui/icons-material";

interface AccountPopoverProps {
  anchorEl: Element | null;
  onClose: () => void;
  open: boolean;
}

export const AccountPopover = (props: AccountPopoverProps) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const { name, isAuthenticated } = useAuth();

  const handleSignOut = useCallback(() => {}, [onClose, router]);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Stack flexDirection={"row"} gap={2}>
          <Typography color="text.secondary" variant="body2">
            {name}
          </Typography>
          {isAuthenticated && <CheckCircle fontSize="small" color="success" />}
        </Stack>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: "8px",
          "& > *": {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
};
