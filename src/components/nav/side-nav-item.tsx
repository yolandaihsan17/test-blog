import NextLink from "next/link";
import { Box, ButtonBase, SvgIcon } from "@mui/material";
import {
  ArticleRounded,
  BarChartRounded,
  LaunchRounded,
} from "@mui/icons-material";

interface SideNavItemProps {
  active: boolean;
  disabled: boolean;
  external: boolean;
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SideNavItem = (props: SideNavItemProps) => {
  const { active = false, disabled, external, icon, path, title } = props;

  const linkProps = path
    ? external
      ? {
          component: "a",
          href: path,
          target: "_blank",
        }
      : {
          component: NextLink,
          href: path,
        }
    : {};

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          justifyContent: "flex-start",
          pl: "16px",
          pr: "16px",
          py: "6px",
          textAlign: "left",
          width: "100%",
          ...(active && {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          }),
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.04)",
          },
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: "center",
              color: "primary.contrastText",
              display: "inline-flex",
              justifyContent: "center",
              mr: 2,
              ...(active && {
                color: "secondary.main",
              }),
            }}
          >
            {icon}
          </Box>
        )}
        <Box
          component="span"
          sx={{
            color: "primary.contrastText",
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
            ...(active && {
              color: "common.white",
            }),
            ...(disabled && {
              color: "neutral.500",
            }),
          }}
        >
          {title}
        </Box>
      </ButtonBase>
    </li>
  );
};

export const getItems = () => {
  return [
    {
      title: "Overview",
      path: "/dashboard",
      icon: (
        <SvgIcon fontSize="small">
          <BarChartRounded />
        </SvgIcon>
      ),
    },
    {
      title: "Posts",
      path: "/dashboard/posts",
      icon: (
        <SvgIcon fontSize="small">
          <ArticleRounded />
        </SvgIcon>
      ),
    },
    {
      title: "Main site",
      path: "/blog",
      icon: (
        <SvgIcon fontSize="small">
          <LaunchRounded />
        </SvgIcon>
      ),
    },
  ];
};
