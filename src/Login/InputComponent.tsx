import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';

let elementId = (prefix = 'id') => {
    return `${prefix}-id`;
}

export default function inputComponent({onChange, label, type, ...props}: { onChange: any, label: string, type?: React.InputHTMLAttributes<unknown>['type'], prop?: any }) {

    return <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs zeroMinWidth>
            <TextField
                required
                id={elementId(label)}
                label={label}
                type={type}
                defaultValue=""
                variant="outlined"
                onChange={onChange}
                {...props}
            />
        </Grid>
    </Grid>;
}
