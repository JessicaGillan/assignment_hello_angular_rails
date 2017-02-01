require 'rails_helper'

describe 'GET /messages/.json' do
  let(:json) { JSON.parse(response.body) }

  before do
    get :index, format: :json
  end

  it 'should return success status' do
    expect(response.status).to eq 200
  end

  it 'should return a json obj' do
    expect(json).to be_a Hash
  end
end
