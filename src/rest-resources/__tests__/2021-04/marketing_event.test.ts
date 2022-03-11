import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {MarketingEvent} from '../../2021-04';

describe('MarketingEvent resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.April21;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await MarketingEvent.all({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-04/marketing_events.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_2', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const marketing_event = new MarketingEvent({session: test_session});
    marketing_event.started_at = "2022-12-15";
    marketing_event.utm_campaign = "Christmas2022";
    marketing_event.utm_source = "facebook";
    marketing_event.utm_medium = "cpc";
    marketing_event.event_type = "ad";
    marketing_event.referring_domain = "facebook.com";
    marketing_event.marketing_channel = "social";
    marketing_event.paid = true;
    await marketing_event.save({});

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2021-04/marketing_events.json',
      query: '',
      headers,
      data: { "marketing_event": {started_at: "2022-12-15", utm_campaign: "Christmas2022", utm_source: "facebook", utm_medium: "cpc", event_type: "ad", referring_domain: "facebook.com", marketing_channel: "social", paid: true} }
    }).toMatchMadeHttpRequest();
  });

  it('test_3', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await MarketingEvent.count({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-04/marketing_events/count.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_4', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await MarketingEvent.find({
      session: test_session,
      id: 998730532,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-04/marketing_events/998730532.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_5', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const marketing_event = new MarketingEvent({session: test_session});
    marketing_event.id = 998730532;
    marketing_event.remote_id = "1000:2000";
    marketing_event.started_at = "2022-02-02T00:00  00:00";
    marketing_event.ended_at = "2022-02-03T00:00  00:00";
    marketing_event.scheduled_to_end_at = "2022-02-04T00:00  00:00";
    marketing_event.budget = "11.1";
    marketing_event.budget_type = "daily";
    marketing_event.currency = "CAD";
    marketing_event.utm_campaign = "other";
    marketing_event.utm_source = "other";
    marketing_event.utm_medium = "other";
    marketing_event.event_type = "ad";
    marketing_event.referring_domain = "instagram.com";
    await marketing_event.save({});

    expect({
      method: 'PUT',
      domain,
      path: '/admin/api/2021-04/marketing_events/998730532.json',
      query: '',
      headers,
      data: { "marketing_event": {id: 998730532, remote_id: "1000:2000", started_at: "2022-02-02T00:00  00:00", ended_at: "2022-02-03T00:00  00:00", scheduled_to_end_at: "2022-02-04T00:00  00:00", budget: "11.1", budget_type: "daily", currency: "CAD", utm_campaign: "other", utm_source: "other", utm_medium: "other", event_type: "ad", referring_domain: "instagram.com"} }
    }).toMatchMadeHttpRequest();
  });

  it('test_6', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await MarketingEvent.delete({
      session: test_session,
      id: 998730532,
    });

    expect({
      method: 'DELETE',
      domain,
      path: '/admin/api/2021-04/marketing_events/998730532.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

  it('test_7', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const marketing_event = new MarketingEvent({session: test_session});
    marketing_event.id = 998730532;
    await marketing_event.engagements({
      body: {engagements: [{occurred_on: "2022-01-15", views_count: 0, clicks_count: 0, favorites_count: 0, ad_spend: 10.0, is_cumulative: true}, {occurred_on: "2022-01-16", views_count: 100, clicks_count: 50, is_cumulative: true}, {occurred_on: "2022-01-17", views_count: 200, clicks_count: 100, is_cumulative: true}]},
    });

    expect({
      method: 'POST',
      domain,
      path: '/admin/api/2021-04/marketing_events/998730532/engagements.json',
      query: '',
      headers,
      data: {engagements: [{occurred_on: "2022-01-15", views_count: 0, clicks_count: 0, favorites_count: 0, ad_spend: 10.0, is_cumulative: true}, {occurred_on: "2022-01-16", views_count: 100, clicks_count: 50, is_cumulative: true}, {occurred_on: "2022-01-17", views_count: 200, clicks_count: 100, is_cumulative: true}]}
    }).toMatchMadeHttpRequest();
  });

});