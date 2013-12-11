# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Phantom::Application.config.secret_key_base = '7c468afb775a2daec3ba70cf3f1fdc265330f06bb07e8332cf679800ca088c3eff00cb81f0d42a6d8bdd66e0a52d00fbe30ff20d4cb255b802288ddc1c3851cf'
