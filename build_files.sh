
echo " BUILD START"
# Install dependencies
python -m pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput --clear

echo "BUILD END"


# Build the project
#python manage.py build
