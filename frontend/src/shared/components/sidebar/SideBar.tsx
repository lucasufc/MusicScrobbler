import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Icon,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import React, { ReactNode } from "react"
import { useDrawerContext } from "../../contexts"
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom"

interface ISideBarProps {
    children: ReactNode
}

interface iListItemLinkProps {
    label: string
    icon: string
    to: string
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC<iListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate()
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({ path: resolvedPath.pathname, end: false })

    const handleClick = () => {
        navigate(to)
        onClick?.()
    }

    return (
        <ListItemButton onClick={handleClick} selected={!!match}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down("sm"))

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()

    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box
                        width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            alt="user_image"
                            src="https://thispersondoesnotexist.com/"
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            {drawerOptions.map((drawerOption) => (
                                <ListItemLink
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    to={drawerOption.path}
                                    label={drawerOption.label}
                                    onClick={smDown ? toggleDrawerOpen : undefined}
                                />
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}
