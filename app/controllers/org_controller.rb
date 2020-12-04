class OrgController < ApplicationController
  def index
    render json: Org.select(:id, :name).map(&:to_select)
  end
end
