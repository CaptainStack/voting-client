import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return <div>Hello from results!</div>
  }
});

