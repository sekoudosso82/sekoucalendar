class UsersController < ApplicationController

    def index
        # users = User.all.sort_by { |user| user.username } 
        users = User.all 
        render json: users, except: [:updated_at, :created_at]

    end 

    def create
        user = User.new(
            username: params[:username],
            password: params[:password]
          )
      
          if user.save
            token = encode_token(user.id)
            render json: {user: user, token: token}
          else
            render json: {errors: user.errors.full_messages}
          end
        
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)

        render json: user, expect: [:updated_at, :created_at] 
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    private
    def user_params 
        params.permit(:username, :password, :email, :phone)
    end

end
