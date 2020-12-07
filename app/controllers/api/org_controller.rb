class Api::OrgController < ApplicationController
  
  def to_select
    render json: Org.select(:id, :name).map(&:to_select)
  end

end
