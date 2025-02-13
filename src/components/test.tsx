import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import {
    Container,
    Paper,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Stack,
    Input,
} from '@mui/material'

import MetricsCharts from "./charts/metrics-charts"

export default function Component() {
    const [department, setDepartment] = useState('')
    const [section, setSection] = useState('')
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const datePickerRef = useRef<HTMLDivElement | null>(null);
    const currentYear = new Date().getFullYear()


    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: new Date(currentYear, 0, 1),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const metrics = [
        { label: 'Candidate', value: '120' },
        { label: 'TP', value: '45' },
        { label: 'TC', value: '32' },
        { label: 'Course', value: '15' },
        { label: 'Scheme', value: '8' },
        { label: 'Training', value: '24' },
    ]

    const defaultValues = ['NULM', 'PLSTP']
    const sectionCounts = [
        { label: 'TP', count: 10 },
        { label: 'TC', count: 10 },
        { label: 'Candidate', count: 50 },
        { label: 'Course', count: 50 },
    ]

    const handleSelect = (ranges: any) => {
        console.log(ranges);
        setSelectedDate([ranges.selection]);
    };



    const handleDatePickerToggle = () => {
        setOpenDatePicker(!openDatePicker);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (datePickerRef.current && !datePickerRef.current.contains(e.target as Node)) {
            setOpenDatePicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <Container maxWidth="xl" sx={ { py: 4 } }>
            <Typography variant="h4" gutterBottom>
                Convergence Dashboard
            </Typography>

            {/* Filters */ }
            <Paper sx={ { p: 2, mb: 3 } }>
                <Grid container spacing={ 3 }>
                    {/* Date Picker Filter */ }
                    <Grid item xs={ 12 } md={ 4 } ref={ datePickerRef }>
                        <Button onClick={ handleDatePickerToggle } sx={ { border: 2, borderColor: "#d1d1cf", padding: 1.5 } }>
                            Selected Date: { selectedDate[0].startDate.toLocaleDateString() } - { selectedDate[0].endDate.toLocaleDateString() }
                        </Button>

                        { openDatePicker && (
                            <Stack>
                                <DateRangePicker
                                    onChange={ item => handleSelect(item) }
                                    maxDate={ new Date() }
                                    moveRangeOnFirstSelection={ false }
                                    ranges={ selectedDate }
                                    direction="horizontal"
                                />
                            </Stack>
                        ) }
                    </Grid>


                    <Grid item xs={ 12 } md={ 4 }>
                        <FormControl fullWidth>
                            <InputLabel>Department</InputLabel>
                            <Select
                                value={ department }
                                label="Department"
                                onChange={ (e) => setDepartment(e.target.value) }
                            >
                                <MenuItem value="dept1">Department 1</MenuItem>
                                <MenuItem value="dept2">Department 2</MenuItem>
                                <MenuItem value="dept3">Department 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <FormControl fullWidth>
                            <InputLabel>Section</InputLabel>
                            <Select
                                value={ section }
                                label="Section"
                                onChange={ (e) => setSection(e.target.value) }
                            >
                                <MenuItem value="section1">Section 1</MenuItem>
                                <MenuItem value="section2">Section 2</MenuItem>
                                <MenuItem value="section3">Section 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>


            {/* Main Content */ }
            <Grid container spacing={ 3 }>
                {/* Metrics */ }
                <Grid item xs={ 12 } md={ 8 }>
                    <MetricsCharts metrics={ metrics } />;
                </Grid>

                {/* Sidebar */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Grid container spacing={ 3 }>
                        {/* Default Values */ }
                        <Grid item xs={ 12 }>
                            <Paper sx={ { p: 2 } }>
                                <Typography variant="h6" gutterBottom>
                                    Default Values
                                </Typography>
                                { defaultValues.map((value) => (
                                    <Typography key={ value }>{ value }</Typography>
                                )) }
                            </Paper>
                        </Grid>

                        {/* Section Counts */ }
                        <Grid item xs={ 12 }>
                            <Paper sx={ { p: 2 } }>
                                <Typography variant="h6" gutterBottom>
                                    Section
                                </Typography>
                                { sectionCounts.map((item) => (
                                    <Typography key={ item.label }>
                                        { item.label } → { item.count }
                                    </Typography>
                                )) }
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Details Table */ }
                <Grid item xs={ 12 }>
                    <Paper sx={ { p: 2 } }>
                        <Typography variant="h6" gutterBottom>
                            List of Details
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Department</TableCell>
                                        <TableCell>Section</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { [1, 2, 3].map((row) => (
                                        <TableRow key={ row }>
                                            <TableCell>{ row }</TableCell>
                                            <TableCell>Item { row }</TableCell>
                                            <TableCell>Dept { row }</TableCell>
                                            <TableCell>Section { row }</TableCell>
                                            <TableCell>Active</TableCell>
                                        </TableRow>
                                    )) }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}