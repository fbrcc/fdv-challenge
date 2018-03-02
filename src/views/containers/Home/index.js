import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCountries } from '../../../core/Countries/action';
import { getCountriesToJS } from '../../../core/Countries/selector';

import { setVisitors } from '../../../core/Visitors/action';
import { getVisitorsToJS } from '../../../core/Visitors/selector';

import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';
import { Title } from '../../components/Title';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { Message } from '../../components/Message';
import { List } from '../../components/List';
import { Flex } from '../../components/Flex';

class Home extends Component {

    constructor (props) {
        super(props);

        this.state = {
            name: '',
            country: '',
            date: '',
            selected: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        this.selectVisitor = this.selectVisitor.bind(this);
    }

    componentDidMount () {
        this.props.getCountries();
    }

    handleChange (e, key, value) {
        var newState = {};
        newState[key] = value;

        this.setState({...this.state, ...newState});
    }

    submit () {
        var newVisitors = [...this.props.visitors];
        newVisitors.push({
            name: this.state.name,
            country: this.state.country,
            date: this.state.date
        });

        this.props.setVisitors(newVisitors);
        
        this.setState({...this.state, ...{
            name: '',
            country: '',
            date: '',
            selected: newVisitors.length - 1
        }});
    }

    validation () {
        return (this.state.name !== '' && this.state.country !== '' && this.state.date !== '') ? false : true
    }

    selectVisitor (index) {
        this.setState({...this.state, ...{
            selected: index
        }});
    }

    render () {
        return (
            <Layout>
                <Title text="Ejercicio Intive">
                    <p><b>Nombre:</b> Fermin Breccia</p>
                </Title>
                <Flex>
                    <Container title="Ingrese sus datos">
                        <Input placeholder="Nombre" name="name" type="text" value={this.state.name} handleChange={this.handleChange} />
                        <Select name="country" value={this.state.country} countries={this.props.countries} handleChange={this.handleChange} />
                        <Input placeholder="Fecha de nacimiento" name="date" type="date" value={this.state.date} handleChange={this.handleChange} pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
                        <Button disabled={this.validation()} submit={this.submit}>Saludar</Button>
                    </Container>
                    <Container title="Visitantes anteriores">
                        <List visitors={this.props.visitors} onSelect={this.selectVisitor} />
                    </Container>
                </Flex>
                <Message selected={this.state.selected} visitors={this.props.visitors} />
            </Layout>
        )
    }

};

function mapStateToProps(state) {
    return {
        countries: getCountriesToJS(state),
        visitors: getVisitorsToJS(state)
    };
};

const mapDispatchToProps = { getCountries, setVisitors };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);