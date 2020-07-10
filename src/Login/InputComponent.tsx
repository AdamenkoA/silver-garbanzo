import * as React from 'react';
import TextField, {BaseTextFieldProps} from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid';

export default function inputComponent({onChange, label, type, ...props}: { onChange: any, label: string, type?: React.InputHTMLAttributes<unknown>['type'], prop?: any }) {
    return <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs zeroMinWidth>
            <TextField
                required
                id="outlined-required"
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
