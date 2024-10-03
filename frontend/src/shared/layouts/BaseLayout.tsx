import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { ReactNode } from "react"
import { useDrawerContext } from "../contexts"

interface IBaseLayoutProps {
    title: string
    children: ReactNode
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children, title }) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    const { toggleDrawerOpen } = useDrawerContext()
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} height={theme.spacing(12)} display="flex" alignItems="center" gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant="h5">{title}</Typography>
            </Box>
            <Box>Options</Box>
            <Box>{children}</Box>
        </Box>
    )
}
