require 'rails_helper'

describe MessagesController do
  describe 'GET /messages/.json' do
    let(:json) { JSON.parse(response.body) }

    before do
      get :index, format: :json
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_an Array
    end
  end

end
