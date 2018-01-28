import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Icon, Input, Button } from 'semantic-ui-react';
import Spinner from 'react-spinkit';

import { getEventDetail } from '../actions/events';
import { saveDateAmount } from '../actions/booking'

class EventDetail extends Component {
  handleInput({target}) {
    let value = target.value;
    if(target.name === 'date') value = new Date(value).toISOString();
    this.setState({
      [target.name]: value
    });
  };

  handleClickSubmit() {
    if(this.state.date && this.state.amount) {
      this.props.saveDateAmount(this.state);
      this.props.history.push('/order')
    } else {
      alert('Mohon isi semua form yg tersedia!!!');
    };
  }

  today() {
    let date = new Date(),
        day = date.getDate().toString(),
        month = (date.getMonth()+1).toString(),
        year = date.getFullYear().toString();

    if(day.length === 1) {
      day = '0'+day
    }
    if(month.length === 1) {
      month = '0'+month
    }

    let today = `${year}-${month}-${day}`;

    return today;
  };

  componentWillMount() {
    this.setState({
      event: this.props.match.params.id.toString()
    });
    this.props.getEventDetail(this.props.match.params.id);
  };

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    let eventDetail = this.props.eventDetail;
    return (
      <div>
        {eventDetail ?
          <div>
            <Image fluid src={eventDetail.urlImage}/><br/>
            <div className='event-info'>
              <div className='left-info'>
                <h1>{eventDetail.name}</h1>
                <Icon name='marker'/> <span>{eventDetail.location}</span>
              </div>
              <div className='right-info'>
                <span>Mulai Dari</span>
                <p className='price-detail'>Rp {eventDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                <a href='#pesan'><Button color='orange'>Pesan Tiket</Button></a>
              </div>
            </div>
            <div className='event-description'>
              <h3>Deskripsi</h3>
              <p>{eventDetail.description}</p>
            </div>
            <div className='event-booking' id='pesan'>
              <h3>Beli Tiket</h3>
              <Input label='Tanggal Kunjungan :' className='input-booking' name='date' type='date' min={this.today()} placeholder='Tanggal Kunjungan' onChange={(e) => this.handleInput(e)}/>
              <Input label='Jumlah :' className='input-booking' name='amount' type='number' placeholder='Tiket/Orang' onChange={(e) => this.handleInput(e)}/>
              <Button color='orange' className='search-button' onClick={() => this.handleClickSubmit()}>Pesan</Button>
            </div>
          </div>
          :
          <div className='loading'>
            <Spinner name="ball-beat" color='orange' fadeIn='none'/>
          </div>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    eventDetail: state.eventReducers.eventDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventDetail: (id) => dispatch(getEventDetail(id)),
    saveDateAmount: (value) => dispatch(saveDateAmount(value)),
  };
};

const EventDetailConnect = connect(mapStateToProps, mapDispatchToProps)(EventDetail);

export default EventDetailConnect;