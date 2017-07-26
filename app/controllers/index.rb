get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

post '/posts/:id/vote' do

  post = Post.find(params[:id])
  post.votes.create(value: 1)
  if request.xhr?
    return { post: post, points: post.points}.to_json # get the post .points in the js and call here
  else
    redirect "/posts"
  end

end

delete '/posts/:id' do
  # write logic for deleting posts here.
  post = Post.delete(params[:id])
  "this is deleted"
end

#create with a partialize - take the form out of index and ruby call it
post '/posts' do
  Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  redirect '/posts'
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
