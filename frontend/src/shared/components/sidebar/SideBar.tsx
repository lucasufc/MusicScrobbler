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
    useTheme,
} from "@mui/material"
import { ReactNode } from "react"

interface ISideBarProps {
    children: ReactNode
}

export const SideBar: React.FC<ISideBarProps> = ({ children }) => {
    const theme = useTheme()
    return (
        <>
            <Drawer variant="permanent">
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
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}