# Build
docker build -t ubuntu-llama .

# Run
docker run -d --rm \
    -p 11434:11434 \
    --name ubuntu-llama \
    ubuntu-llama
