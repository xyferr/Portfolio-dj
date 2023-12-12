
echo " BUILD START"
# Install dependencies
python3.9 -m pip install -r requirements.txt

# Collect static files
python3.9 manage.py collectstatic --noinput --clear

echo "BUILD END"


# Build the project
#python manage.py build
