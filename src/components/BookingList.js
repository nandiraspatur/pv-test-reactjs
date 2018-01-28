import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Modal, Header, Divider } from 'semantic-ui-react';
import Spinner from 'react-spinkit';

import { getAllBooking } from '../actions/booking';

class BookingList extends Component {
  getDate(dateStr) {
    if(!dateStr) return ''
    let date = new Date(dateStr);

    let monthNames = [
      "Januari", "Februari", "Maret",
      "April", "Mei", "Juni", "Juli",
      "Agustus", "September", "Oktober",
      "November", "Desember"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  };

  getPrice(total) {
    let totalPrice = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return totalPrice;
  }

  componentWillMount() {
    this.props.getAllBooking()
  }

  render() {
    return (
      <div>
        <h1>Daftar Pesanan</h1>
        {this.props.bookingList ?
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID Pesanan</Table.HeaderCell>
                <Table.HeaderCell>Nama Pemesan</Table.HeaderCell>
                <Table.HeaderCell>Tanggal Kunjungan</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.bookingList.length === 0 ?
                <Table.Row>
                  <Table.Cell colSpan='5' textAlign='center'>Data Kosong</Table.Cell>
                </Table.Row>
                :
                this.props.bookingList.map((booking, i) => {
                  return  <Table.Row key={i}>
                            <Table.Cell>{booking._id}</Table.Cell>
                            <Table.Cell>{booking.fullname}</Table.Cell>
                            <Table.Cell>{this.getDate(booking.date)}</Table.Cell>
                            <Table.Cell>Rp {this.getPrice(booking.total)}</Table.Cell>
                            <Table.Cell textAlign='center'>
                              <Modal size='small' trigger={<Button color='orange'>Detail</Button>} closeIcon>
                                <Header icon='archive' content={`Detail Pesanan - ${booking._id}`} />
                                <Modal.Content>
                                  <Table singleLine>
                                    <Table.Body>
                                      <Table.Row className='total-price'>
                                        <Table.Cell colSpan='2'>{booking.event.name}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                        <Table.Cell>Tanggal Kunjungan:</Table.Cell>
                                        <Table.Cell width={6}>{this.getDate(booking.date)}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                        <Table.Cell>Jumlah Tamu:</Table.Cell>
                                        <Table.Cell>{booking.amount} orang</Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                  </Table>
                                  <Divider/>
                                  <Table singleLine>
                                    <Table.Body>
                                      <Table.Row>
                                        <Table.Cell>Nama Lengkap:</Table.Cell>
                                        <Table.Cell width={6}>{booking.fullname}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                        <Table.Cell>Alamat Email:</Table.Cell>
                                        <Table.Cell>{booking.email}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                        <Table.Cell>No. Handphone:</Table.Cell>
                                        <Table.Cell>0{booking.phone}</Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                  </Table>   
                                  <Divider/>
                                  <Table singleLine>
                                    <Table.Body>
                                      <Table.Row>
                                        <Table.Cell>Jumlah {booking.amount}x</Table.Cell>
                                        <Table.Cell width={6}>Rp {this.getPrice(booking.total)}</Table.Cell>
                                      </Table.Row>
                                      <Table.Row>
                                        <Table.Cell>Pajak</Table.Cell>
                                        <Table.Cell>Termasuk</Table.Cell>
                                      </Table.Row>
                                    </Table.Body>
                                    <Table.Footer>
                                      <Table.Row className='total-price'>
                                        <Table.Cell>Total</Table.Cell>
                                        <Table.Cell>Rp {this.getPrice(booking.total)}</Table.Cell>
                                      </Table.Row>
                                    </Table.Footer>
                                  </Table>
                                </Modal.Content>
                                <Modal.Actions>
                                </Modal.Actions>
                              </Modal>
                            </Table.Cell>
                          </Table.Row>
                })
              }
            </Table.Body>
          </Table>
          :
          <div className='loading'>
            <Spinner name="ball-beat" color='orange' fadeIn='none'/>
          </div>
        }
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    bookingList: state.bookingReducers.bookingList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooking: () => dispatch(getAllBooking())
  }
};

const BookingListConnect = connect(mapStateToProps, mapDispatchToProps)(BookingList);

export default BookingListConnect;