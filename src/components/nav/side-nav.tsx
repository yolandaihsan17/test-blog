import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { Box, Drawer, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import Link from "next/link";
import { SideNavItem, getItems } from "./side-nav-item";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

export const SideNav = (props: SideNavProps) => {
  const { open, onClose } = props;
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Link href="/">
          <Box
            sx={{
              display: "inline-flex",
            }}
          >
            <Typography variant="h2" color={"white"}>
              SN
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: "none",
            p: 0,
            m: 0,
          }}
        >
          {getItems().map((item: any) => {
            const active = item.path ? pathname === item.path : false;

            return (
              <SideNavItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "primary.main",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
