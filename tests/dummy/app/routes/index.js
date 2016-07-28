/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user', {
      details: this.store.createRecord('user-detail')
    });
  }
});
