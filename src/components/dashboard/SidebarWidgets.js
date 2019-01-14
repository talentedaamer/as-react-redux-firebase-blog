import React from "react";

import {
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';


import {AddBox, Power } from '@material-ui/icons';

const SidebarWidgets = () => {
    return (
        <Card>

            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <AddBox />
                    </ListItemIcon>
                    <ListItemText primary="Create Post" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Power />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>

            <CardContent>
                <CardHeader
                    title="Widget Title.."
                    subheader="September 14, 2016"
                />
            </CardContent>
        </Card>
    );
};

export default SidebarWidgets;
