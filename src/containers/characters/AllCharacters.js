import React from 'react';
import Loading from '../../components/Loading';

export default class AllCharacters extends PureComponent {
  state = {
    currentPage: 1,
    totalPageS: 1,
    characters: [],
    loading: true
  }

  render() {
    const {
      currentPage,
      totalPages,
      characters,
      loading
    } = this.state;
  }
  if(loading) return <Loading />;
}
