# -*- coding: utf-8 -*-
# this file is released under public domain and you can use without limitations

# -------------------------------------------------------------------------
# This is a sample controller
# - index is the default action of any application
# - user is required for authentication and authorization
# - download is for downloading files uploaded in the db (does streaming)
# -------------------------------------------------------------------------


def index():
    title = "Testing react with web2py"
    props = {"users": [{"username": "bob"}, {"username": "alice"}]}

    component = "pageSimple.js"
    return dict(title=title, props=props, component=component)


def simpleindex():
    title = "Testing react with web2py not using webpack, simple js includes"
    props = {"users": [{"username": "bob"}, {"username": "alice"}]}
    component = "testindex.js"

    return dict(title=title, props=props, component=component)


def advanced():
    title = "Using a big component"
    props = {"products": [{'id': 1, 'name': "Apples", 'price': 1.20},
                          {'id': 2, 'name': "Pears", 'price': 1.80}]}
    component = "pageAdvanced.js"

    return dict(title=title, props=props, component=component)


def reduxforms():
    title = "using redux-forms"
    props = {}
    component = "advancedForm.js"
    return dict(title=title, props=props, component=component)


def reduxvalidation():
    title = "using redux-forms with backend validation"

    form = SQLFORM.factory(
        Field('firstName', requires=IS_NOT_EMPTY()),
        Field('lastName'),
        Field('email', requires=IS_EMAIL()),
        Field('sex', requires=IS_IN_SET(('male', 'female'))),
        Field('favoriteColor', requires=IS_IN_SET(
            ('ff0000', '00ff00', '0000ff'))),
        Field('employed', 'boolean'),
        Field('Notes', 'text'))
    form.validate()
    component = "validatingForm.js"
    props = {'formname': form.formname, 'formkey': form.formkey}

    return dict(title=title, props=props, component=component, errors=form.errors)


def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/bulk_register
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    also notice there is http://..../[app]/appadmin/manage/auth to allow administrator to manage users
    """
    return dict(form=auth())


@cache.action()
def download():
    """
    allows downloading of uploaded files
    http://..../[app]/default/download/[filename]
    """
    return response.download(request, db)


def call():
    """
    exposes services. for example:
    http://..../[app]/default/call/jsonrpc
    decorate with @services.jsonrpc the functions to expose
    supports xml, json, xmlrpc, jsonrpc, amfrpc, rss, csv
    """
    return service()
