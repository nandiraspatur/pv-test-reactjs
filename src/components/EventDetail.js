import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Icon, Input } from 'semantic-ui-react';

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
        {!eventDetail ?
          <p>Loading...</p>
          :
          <div>
            <Image fluid src={eventDetail.urlImage}/>
            <div className='event-info'>
              <div className='left-info'>
                <h1>{eventDetail.name}</h1>
                <Icon name='marker'/> <span>{eventDetail.location}</span>
              </div>
              <div className='right-info'>
                <span>Mulai Dari</span>
                <p>Rp {eventDetail.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                <a href='#pesan'><button>Pesan Tiket</button></a>
              </div>
            </div>
            <div className='event-description'>
              <h3>Deskripsi</h3>
              <p>{eventDetail.description}</p>
            </div>
            <div className='event-booking' id='pesan'>
              <Input label='Tanggal Kunjungan :' className='input-booking' name='date' type='date' placeholder='Tanggal Kunjungan' onChange={(e) => this.handleInput(e)}/>
              <Input label='Jumlah :' className='input-booking' name='amount' type='number' placeholder='Tiket/Orang' onChange={(e) => this.handleInput(e)}/>
              <button className='search-button' onClick={() => this.handleClickSubmit()}>Pesan</button>
            </div>
          </div>
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    eventDetail: state.eventReducers.eventDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEventDetail: (id) => dispatch(getEventDetail(id)),
    saveDateAmount: (value) => dispatch(saveDateAmount(value))
  };
};

const EventDetailConnect = connect(mapStateToProps, mapDispatchToProps)(EventDetail);

export default EventDetailConnect;